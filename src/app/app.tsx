import { withProviders } from "./providers";
import { Routing } from "pages/routing/Routing";
import { Helmet } from "react-helmet";

const App = () => {
	return (
		<Routing />
	)
}

export default withProviders(App);