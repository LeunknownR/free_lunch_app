import CenteredLayout from "../layout/CenteredLayout";
import "./styles.css";

const NotFoundView = () => {
	return (
		<CenteredLayout>
			<section id="section-404">
				<h1>404</h1>
				<p>Lo sentimos, la página no pudo ser encontrada.</p>
			</section>
		</CenteredLayout>
	);
}

export default NotFoundView;