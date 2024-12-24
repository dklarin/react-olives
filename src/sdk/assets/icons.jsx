/**
 * @summary
 * The svg icons exported as React component
 * @description
 * Import the svg file as ReactComponent and add the coresponding property to the icons object.
 *
 *
 */
import { styleSvg } from "./makeIcon";

import { ReactComponent as CancelSvg } from "./icons/cancel.svg";
import { ReactComponent as AddSvg } from "./icons/add.svg";
import { ReactComponent as DeleteSvg } from "./icons/delete.svg";
import { ReactComponent as RefreshSvg } from "./icons/refresh.svg";
import { ReactComponent as SettingsSvg } from "./icons/settings.svg";
import { ReactComponent as HomeSvg } from "./icons/home.svg";
import { ReactComponent as FolderSvg } from "./icons/folder.svg";
import { ReactComponent as ArchiveCabinetSvg } from "./icons/archive-cabinet.svg";
import { ReactComponent as ErrorIcon } from "./icons/error.svg";
import { ReactComponent as LockSvg } from "./icons/lock.svg";
import { ReactComponent as UnlockSvg } from "./icons/unlock.svg";
import { ReactComponent as DownloadSvg } from "./icons/download.svg";
import { ReactComponent as SaveSvg } from "./icons/save.svg";
import { ReactComponent as UploadSvg } from "./icons/upload.svg";
import { ReactComponent as GroupSvg } from "./icons/group.svg";
import { ReactComponent as UserSvg } from "./icons/user.svg";
import { ReactComponent as DocumentsSvg } from "./icons/documents.svg";
import { ReactComponent as FoldersSvg } from "./icons/folders.svg";
import { ReactComponent as EditSvg } from "./icons/edit.svg";
import { ReactComponent as ReportSvg } from "./icons/report.svg";
import { ReactComponent as QuestionSvg } from "./icons/question.svg";
import { ReactComponent as NotificationSvg } from "./icons/notification.svg";
import { ReactComponent as CheckSvg } from "./icons/check.svg";
import { ReactComponent as MenuSvg } from "./icons/menu.svg";
import { ReactComponent as CalendarSvg } from "./icons/calendar.svg";
import { ReactComponent as PinSvg } from "./icons/pin.svg";
import { ReactComponent as LeftArrowSvg } from "./icons/left-arrow.svg";
import { ReactComponent as RightArrowSvg } from "./icons/right-arrow.svg";
import { ReactComponent as PrinterSvg } from "./icons/printer.svg";

export { makeIcon } from "./makeIcon";

export const icons = {
  cancel: styleSvg(CancelSvg),
  check: styleSvg(CheckSvg),
  add: styleSvg(AddSvg),
  delete: styleSvg(DeleteSvg),
  refresh: styleSvg(RefreshSvg),
  settings: styleSvg(SettingsSvg),
  home: styleSvg(HomeSvg),
  folder: styleSvg(FolderSvg),
  error: styleSvg(ErrorIcon),
  lock: styleSvg(LockSvg),
  unlock: styleSvg(UnlockSvg),
  download: styleSvg(DownloadSvg),
  upload: styleSvg(UploadSvg),
  save: styleSvg(SaveSvg),
  user: styleSvg(UserSvg),
  group: styleSvg(GroupSvg),
  documents: styleSvg(DocumentsSvg),
  folders: styleSvg(FoldersSvg),
  edit: styleSvg(EditSvg),
  report: styleSvg(ReportSvg),
  question: styleSvg(QuestionSvg),
  calendar: styleSvg(CalendarSvg),
  notification: styleSvg(NotificationSvg),
  "archive-cabinet": styleSvg(ArchiveCabinetSvg),
  menu: styleSvg(MenuSvg),
  pin: styleSvg(PinSvg),
  rightArrow: styleSvg(RightArrowSvg),
  leftArrow: styleSvg(LeftArrowSvg),
  printer: styleSvg(PrinterSvg),
};
