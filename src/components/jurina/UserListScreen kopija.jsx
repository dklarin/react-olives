import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QueryUsersGql } from "./gql";
import { useNavigate } from "react-router-dom";
import { PageContent } from "layout/PageContent";

import { DataTable } from "../../sdk/ui/";

import {
  StyledAddIcon,
  StyledForm,
  StyledToolbar,
  StyledUserContainer,
  StyledSearchBar,
} from "./utils/styling";
import { columns } from "./utils/columns";

export const UserListScreen = (props) => {
  let navigate = useNavigate();

  const [initialValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [isBusy] = useState(false);
  const initialQueryVariables = { pageNumber: 1, searchTerm: "" };
  const [queryVariables] = useState(initialQueryVariables);
  const { data } = useQuery(QueryUsersGql, {
    variables: queryVariables,
  });

  if (!data) {
    return null;
  }

  const users = data.user.list;

  console.log(users);

  return (
    <PageContent isBusy={isBusy}>
      <StyledToolbar>
        <StyledUserContainer onClick={() => navigate(`/admin/users/create/`)}>
          <StyledAddIcon></StyledAddIcon>
          <div>Create New User</div>
        </StyledUserContainer>
      </StyledToolbar>
      <StyledForm initialValues={initialValues}>
        <StyledSearchBar
          autoFocus
          style={{ margin: "5px" }}
          placeholder={"Filter by Username, First name or Last name"}
        ></StyledSearchBar>
        <div style={{ flex: 1 }}>
          <DataTable
            onRowClick={(row) => {
              navigate(`/admin/users/edit/${row.id}`);
            }}
            columns={columns}
            data={users}
          />
        </div>
      </StyledForm>
    </PageContent>
  );
};
