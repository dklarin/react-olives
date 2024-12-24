import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { PageContent } from "./layout/PageContent";
//import { useQuery } from "@apollo/client";
/*import {
  queryGetCertificatesGql,
  queryGetProductsAndBenefitsGql,
} from "../lifely/myList/gql";*/

//import { QueryUsersGql } from "./gql";

import moment from "moment";
//import { useNavigate } from "react-router-dom";
import ContentLoader from "react-content-loader";
import * as Ui from "./styles";

import { useClickOutside, DataTable, TableColumn } from "../../sdk/ui";

import { data } from "../../data";

export const UserListScreen = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [filter, setFilter] = useState("");
  const [availableProducts, setAvailableProducts] = useState([]);

  const [viewStyle, setViewStyle] = useState("cards");

  /*const { loading, data: datas, refetch } = useQuery(queryGetCertificatesGql, {
    variables: { pageNumber: currentPage, filter: filter },
  });*/
  /*const { data: productAndBenefitsData } = useQuery(
    queryGetProductsAndBenefitsGql,
    {
      onCompleted: (result) =>
        setAvailableProducts(
          result.product.search.map((product) => product.id)
        ),
    }
  );*/

  const [initialValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [isBusy] = useState(false);
  const initialQueryVariables = { pageNumber: 1, searchTerm: "" };
  const [queryVariables] = useState(initialQueryVariables);
  /*const { loading, data } = useQuery(QueryUsersGql, {
    variables: queryVariables,
  });*/

  useEffect(() => {
    //refetch();
  }, [currentPage, filter]);

  /*useEffect(() => {
    setTotalPages(data?.user.list);
  }, [data]);*/

  //let navigate = useNavigate();

  let loading = false;

  return (
    <PageContent>
      <Ui.StyledMyCertificatesContainer>
        {/* sticky container for tool and search bar */}
        <div
          style={{
            position: "sticky",
            top: "0rem",
            alignSelf: "stretch",
            zIndex: 1111,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
            padding: "4px 0px",
          }}
        >
          {/* <Ui.StyledToolbar>
            <Ui.StyledNewCertificateContainer
              onClick={(e) => {
                e.stopPropagation();
                navigate("/quote/create");
              }}
            >
              <Ui.StyledAddIcon></Ui.StyledAddIcon>
              <div>Create New Certificate</div>
            </Ui.StyledNewCertificateContainer>

            <Ui.StyledSeparator />
            <Ui.StyledGridLayoutIcon
              active={viewStyle === "dataTable" ? "true" : "false"}
              onClick={() => setViewStyle("dataTable")}
            />
            <Ui.StyledTablesLayoutIcon
              active={viewStyle === "tables" ? "true" : "false"}
              onClick={() => setViewStyle("tables")}
            />
            <Ui.StyledCardLayoutIcon
              active={viewStyle === "cards" ? "true" : "false"}
              onClick={() => setViewStyle("cards")}
            />

            <Ui.StyledSeparator />
          </Ui.StyledToolbar> */}

          {/*<SearchBar setFilter={setFilter}></SearchBar>*/}
        </div>
        {loading && (
          <>
            <MyLoader /> <MyLoader /> <MyLoader />
            <MyLoader /> <MyLoader /> <MyLoader /> <MyLoader />
          </>
        )}
        {!loading && viewStyle === "cards" && data && (
          <CardLayoutContainer data={data} />
        )}

        {!loading &&
          viewStyle === "tables" &&
          data.map((data) => <Table margin="1rem" data={data} key={data.id} />)}

        {!loading && viewStyle === "dataTable" && (
          <DataTable
            /*onRowClick={(row) =>
              navigate(`/quote/create/smartsave/${row.id}/step1`, {})
            }*/
            data={data?.user.list}
            columns={columns}
          ></DataTable>
        )}

        {!loading && (
          <PageSelector
            loading={loading}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          ></PageSelector>
        )}
      </Ui.StyledMyCertificatesContainer>
    </PageContent>
  );
};

const CardLayoutContainer = (props) => {
  console.log(props.data);
  return (
    <Ui.StyledCardContainer>
      {props.data.questions.map((data) => (
        <Card
          containerRef={props.containerRef}
          key={data.id}
          data={data}
          refCardLayoutContainer={props.refCardLayoutContainer}
        ></Card>
      ))}
    </Ui.StyledCardContainer>
  );
};

const Card = (props) => {
  const [expand, setExpand] = useState(false);
  //const navigate = useNavigate();
  const refExpand = useRef();
  const refExpanded = useRef();

  useClickOutside(refExpand, () => setExpand(false), refExpanded);

  const { isShowing, toggle } = useModal();

  return (
    <Ui.StyledCard
    //onClick={() => navigate(`/quote/create/smartsave/${props.data.id}/step1`)}
    >
      <Modal isShowing={isShowing} hide={toggle}>
        <Table width={"100%"} data={props.data} />
      </Modal>
      <div
        style={{
          gridColumn: "span 2",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1rem",
        }}
      >
        {props.data.id} {props.data.text}
      </div>
      <div
        style={{
          gridColumn: "span 2",
          textAlign: "center",
        }}
      >
        {props.data.userName}
      </div>
      <div style={{ textAlign: "right", paddingRight: "2px" }}>Term:</div>

      <div style={{ textAlign: "right", paddingRight: "2px" }}>Frequency:</div>

      <div style={{ textAlign: "right", paddingRight: "2px" }}>
        Plan Basis:{" "}
      </div>
      <div style={{ paddingLeft: "2px" }}></div>
      <div style={{ textAlign: "right", paddingRight: "2px" }}>
        Plan Start Date:
      </div>
      <div style={{ paddingLeft: "2px" }}></div>
      <Ui.StyledDotsIcon
        active={expand ? "true" : "false"}
        ref={refExpand}
        onClick={(e) => {
          e.stopPropagation();
          setExpand((prev) => !prev);
        }}
      />
      <Ui.StyledCardOptions ref={refExpanded} expand={!!expand}>
        <Ui.StyledResizeIcon
          onClick={(e) => {
            e.stopPropagation();
            toggle();
          }}
        ></Ui.StyledResizeIcon>
        <Ui.StyledEditIcon
          onClick={(e) => {
            e.stopPropagation();
            //navigate(`/quote/create/smartsave/${props.data.id}/step1`);
          }}
        ></Ui.StyledEditIcon>
        <Ui.StyledDeleteIcon
          onClick={(e) => {
            e.stopPropagation();
            alert("delete me");
          }}
        ></Ui.StyledDeleteIcon>
      </Ui.StyledCardOptions>
      {/*<Ui.GetImage name={props.data.product.id as Ui.TImageName}></Ui.GetImage>*/}
    </Ui.StyledCard>
  );
};

const PageSelector = (props) => {
  let pageButtons = [];
  for (let i = 1; i <= props.totalPages; i++) {
    pageButtons.push(
      <PageButton
        onClick={props.setCurrentPage}
        key={i}
        page={i}
        disabled={props.currentPage === i}
      ></PageButton>
    );
  }

  return (
    <Ui.StyledPageSelectorContainer>
      {!props.loading && (
        <>
          <Ui.StyledLeftArrow
            onClick={() => props.setCurrentPage((prev) => prev - 1)}
            disabled={props.currentPage === 1}
          ></Ui.StyledLeftArrow>
          {pageButtons}
          <Ui.StyledRightArrow
            onClick={() => props.setCurrentPage((prev) => prev + 1)}
            disabled={props.currentPage === props.totalPages}
          ></Ui.StyledRightArrow>
        </>
      )}
    </Ui.StyledPageSelectorContainer>
  );
};

const PageButton = (props) => {
  return (
    <Ui.StyledPageButton
      onClick={() => props.onClick(props.page)}
      disabled={props.disabled}
    >
      {props.page}
    </Ui.StyledPageButton>
  );
};

const SearchBar = (props) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => props.setFilter(value), 1000);
    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return (
    <Ui.StyledSearchBar
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(e) => e.keyCode === 27 && setValue("")}
      placeholder={"Filter by Proposer's name..."}
      value={value}
    ></Ui.StyledSearchBar>
  );
};

const MyLoader = () => (
  <ContentLoader
    speed={1}
    backgroundColor={"#eee"}
    foregroundColor={"#ddd"}
    viewBox="0 0 700 50"
  >
    {/* Only SVG shapes */}
    <rect x="1%" y="8" rx="5" ry="5" width="15%" height="8" />
    <rect x="1%" y="20" rx="5" ry="5" width="15%" height="8" />
    <rect x="1%" y="32" rx="5" ry="5" width="98%" height="8" />
    <rect x="17%" y="8" rx="5" ry="5" width="15%" height="8" />
    <rect x="17%" y="20" rx="5" ry="5" width="15%" height="8" />
    <rect x="33%" y="8" rx="5" ry="5" width="15%" height="8" />
    <rect x="33%" y="20" rx="5" ry="5" width="15%" height="8" />
  </ContentLoader>
);

const Table = (props) => {
  //const navigate = useNavigate();

  return (
    <>
      <Ui.StyledTable
        /*onClick={() =>
          navigate(`/quote/create/smartsave/${props.data.id}/step1`)
        }*/
        margin={props.margin}
        width={props.width}
      >
        <GridItem header>Agent's Information</GridItem>
        <GridItem label>Name:</GridItem>
        <GridItem>
          {props.data.agent.firstName + " " + props.data.agent.lastName}
        </GridItem>
        <GridItem label>Telephone No.:</GridItem>
        <GridItem>{props.data.agent.phone}</GridItem>
        <GridItem label>E-mail:</GridItem>
        <GridItem>{props.data.agent.email}</GridItem>
        <GridItem label>Address:</GridItem>
        <GridItem>{props.data.agent.address}</GridItem>
        <GridItem header> Proposer's Information</GridItem>
        <GridItem label>Name:</GridItem>
        <GridItem>
          {props.data.proposer.firstName} {props.data.proposer.lastName}
        </GridItem>
        <GridItem label>Country of residence:</GridItem>
        <GridItem>{props.data.proposer.country.name}</GridItem>
        <GridItem label>Date of Birth:</GridItem>
        <GridItem>
          {moment(props.data.proposer.dateOfBirth).format("DD MMM YYYY")}
        </GridItem>
        <GridItem label>Marital status:</GridItem>
        <GridItem>{props.data.proposer.maritalStatus.name}</GridItem>
        <GridItem label>Age:</GridItem>
        <GridItem>
          {moment()
            .diff(moment(props.data.proposer.dateOfBirth), "years")
            .toString()}
        </GridItem>
        <GridItem label>Smoker:</GridItem>
        <GridItem>{props.data.proposer.smoker ? "Yes" : "No"}</GridItem>
        <GridItem label>Gender:</GridItem>
        <GridItem>{props.data.proposer.gender.name}</GridItem>
        <GridItem label>Occupational Class:</GridItem>
        <GridItem>{props.data.proposer.occupationalClass.code}</GridItem>
        <GridItem header> Takaful Certifikate Details</GridItem>
        <GridItem label style={{ color: "red" }}>
          Single Contribution Top-up:
        </GridItem>
        <GridItem style={{ color: "red" }}>
          {props.data.singleContributionTopUp}
        </GridItem>
        <GridItem label>Payment Term:</GridItem>
        <GridItem>{props.data.term.term}</GridItem>
        <GridItem label>Regular Contribution:</GridItem>
        <GridItem>{props.data.regularContribution}</GridItem>
        <GridItem label>Plan Currency:</GridItem>
        <GridItem>
          {props.data.currency.name + ` (${props.data.currency.code})`}
        </GridItem>
        <GridItem label>Annualized Contribution:</GridItem>
        <GridItem>{props.data.annualizedContribution}</GridItem>

        <GridItem label>Plan Basis:</GridItem>
        <GridItem>{props.data.planBasis.description}</GridItem>
        <GridItem label>Indexation of Premium:</GridItem>
        <GridItem>{props.data.indexationOfPremium}</GridItem>
        <GridItem label>Plan Start Date:</GridItem>
        <GridItem>
          {moment(props.data.planStartDate).format("DD MMM YYYY")}
        </GridItem>
        <GridItem label>Indexation of Coverage:</GridItem>
        <GridItem>{props.data.indexationOfCoverage}</GridItem>
        <GridItem label>Plan End Date:</GridItem>
        <GridItem>
          {moment(props.data.planEndDate).format("DD MMM YYYY")}
        </GridItem>
        <GridItem label>Frequency:</GridItem>
        <GridItem>{props.data.frequency.name}</GridItem>

        <GridItem header>Takaful Benefits</GridItem>
        <GridItem label children="Basic:" position="17/1" />
        <GridItem
          children={getCertificateBenefitDetails(1, props.data.benefits)}
          position="17/2"
        />
        <GridItem label children="Death:" position="18/1" />
        <GridItem
          children={getCertificateBenefitDetails(2, props.data.benefits)}
          position="18/2"
        />
        <GridItem label children="Add level term death:" position="19/1" />
        <GridItem
          children={getCertificateBenefitDetails(3, props.data.benefits)}
          position="19/2"
        />
        <GridItem label children="PTD (accelerated):" position="20/1" />
        <GridItem
          children={getCertificateBenefitDetails(4, props.data.benefits)}
          position="20/2"
        />
        <GridItem label children="Waiver of Cont. (WC):" position="21/1" />
        <GridItem
          children={getCertificateBenefitDetails(5, props.data.benefits)}
          position="21/2"
        />
        <GridItem label children="Disability Income (DI):" position="22/1" />
        <GridItem
          children={getCertificateBenefitDetails(6, props.data.benefits)}
          position="22/2"
        />
        <GridItem label children="Acc. Death (AD):" position="23/1" />
        <GridItem
          children={getCertificateBenefitDetails(7, props.data.benefits)}
          position="23/2"
        />
        <GridItem
          label
          children="Perm. Partial Disability (PPD):"
          position="24/1"
        />
        <GridItem
          children={getCertificateBenefitDetails(8, props.data.benefits)}
          position="24/2"
        />
        <GridItem
          label
          children="Temp. Total Disability (TTD):"
          position="17/3"
        />
        <GridItem
          children={getCertificateBenefitDetails(9, props.data.benefits)}
          position="17/4"
        />
        <GridItem label children="Medical Expenses (ME):" position="18/3" />
        <GridItem
          children={getCertificateBenefitDetails(10, props.data.benefits)}
          position="18/4"
        />
        <GridItem label children="Critical Illnesses (CI):" position="19/3" />
        <GridItem
          children={getCertificateBenefitDetails(11, props.data.benefits)}
          position="19/4"
        />
        <GridItem label children="Terminal Illnesses (TI):" position="20/3" />
        <GridItem
          children={getCertificateBenefitDetails(12, props.data.benefits)}
          position="20/4"
        />
        <GridItem
          label
          children="In-Hospital Cash Benefit (HB):"
          position="21/3"
        />
        <GridItem
          children={getCertificateBenefitDetails(13, props.data.benefits)}
          position="21/4"
        />
        <GridItem label children="Funeral Expenses (FE):" position="22/3" />
        <GridItem
          children={getCertificateBenefitDetails(14, props.data.benefits)}
          position="22/4"
        />
        <GridItem label children="Repatriation Benefit (RB):" position="23/3" />
        <GridItem
          children={getCertificateBenefitDetails(15, props.data.benefits)}
          position="23/4"
        />
        <GridItem label children="PTD (Additional):" position="24/3" />
        <GridItem
          children={getCertificateBenefitDetails(16, props.data.benefits)}
          position="24/4"
        />
      </Ui.StyledTable>
      <div
        style={{
          position: "relative",
          width: "80%",
          left: "10%",
          height: "2px",
          backgroundColor: "darkgray",
        }}
      ></div>
    </>
  );
};

const GridItem = (props) => {
  return (
    <Ui.StyledGridItem
      style={props.style}
      position={props.position}
      label={props.label ? "true" : "false"}
      header={props.header ? "true" : "false"}
    >
      {props.children}
    </Ui.StyledGridItem>
  );
};

function getCertificateBenefitDetails(id, benefits) {
  for (let i = 0; i < benefits.length; i++) {
    if (id == benefits[i].benefit.benefitId) {
      return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
          <div>yes</div>
          <div>{benefits[i].contribution}</div>
          <div>uw: {benefits[i].uwLoad || 0} %</div>
        </div>
      );
    }
  }

  return "no";
}

const columns = [
  {
    Header: " ",
    columns: [
      {
        Header: "Product Name",
        accessor: "product.productName",
        maxWidth: 150,
      },
    ],
  },
  {
    Header: "Proposer",
    columns: [
      {
        Header: "First Name",
        accessor: "proposer.firstName",
        maxWidth: 150,
        style: { fontWeight: "bold" },
      },
      {
        Header: "Last Name",
        accessor: "proposer.lastName",
        maxWidth: 150,
        style: { fontWeight: "bold" },
      },
      {
        Header: "Country of Residence",
        accessor: "proposer.country.name",
        maxWidth: 190,
      },
      {
        Header: "Marital Status",
        accessor: "proposer.maritalStatus.name",
        maxWidth: 190,
      },
      {
        Header: "Date of Birth",
        accessor: (row) =>
          moment(row.proposer.dateOfBirth).format("DD.MM.YYYY"),
        maxWidth: 120,
      },
      {
        Header: "Gender",
        accessor: "proposer.gender.name",
        maxWidth: 90,
      },
    ],
  },
  {
    Header: "Certificate",
    columns: [
      {
        Header: "Plan Start Date",
        accessor: (row) => moment(row.planStartDate).format("DD.MM.YYYY"),
        maxWidth: 120,
      },
      {
        Header: "Term",
        accessor: "term.term",
        maxWidth: 60,
      },
    ],
  },
];

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  };
};

const Modal = ({ isShowing, hide, children }) => {
  const modalRef = useRef();
  useClickOutside(modalRef, hide);

  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <Ui.StyledModalWrapper>
            <Ui.StyledModal ref={modalRef}>{children}</Ui.StyledModal>
          </Ui.StyledModalWrapper>
        </React.Fragment>,
        document.body
      )
    : null;
};
