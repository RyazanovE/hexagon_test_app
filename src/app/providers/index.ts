import compose from "compose-function";
import { withRouter } from "./with-router/withRouter";
import { withStore } from "./with-store/withStore";

export const withProviders = compose(withRouter, withStore);