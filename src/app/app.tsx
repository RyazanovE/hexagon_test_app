import { withProviders } from "./providers";
import { Routing } from "pages/routing/Routing";

const App = () => {
	return (
		<Routing />
	)
}

export default withProviders(App);