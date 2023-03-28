import styled from "styled-components";

const StyledLayout = styled.div`
	width: 100%;
	min-height: 100vh;
	background-color: #fff;
	display: grid;
	font-size: 1.6rem;
	grid-template-columns: 76px 1fr;
	.main {
		display: grid;
		grid-template-rows: 10rem 1fr;
	}
	.left {
		width: 100%;
		height: 100%;
		background-color: olivedrab;
	}
	.top {
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-columns: repeat(4, 1fr) 1.5fr;
		justify-items: center;
		align-items: center;
	}
	.top > div:not(:nth-child(6)) {
		width: 90%;
		height: 5.5rem;
		background-color: #fff;
		border: 0;
		border-radius: 30px;
		box-shadow: 2px 2px 11px 2px rgba(0, 0, 0, 0.1);
		display: flex;
		justify-content: center;
		align-items: center;
		background-repeat: no-repeat;
		background-position: center;
		background-size: auto 60%;
	}
	.top > div:nth-child(1) {
		background-image: url("https://www.opsaas.kr/img/aws_on.png");
	}
	.top > div:nth-child(2) {
		background-image: url("https://www.opsaas.kr/img/kt_on.png");
	}
	.top > div:nth-child(3) {
		background-image: url("https://www.opsaas.kr/img/naver_on.png");
	}
	.top > div:nth-child(4) {
		background-image: url("https://www.opsaas.kr/img/nhn_on.png");
	}
	.top > div:nth-child(6){
		display:none;
	}
	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr;
		.main {
			grid-template-rows: 15rem 1fr;
		}
		.left {
			display: none;
		}
		.top {
			grid-template-columns: repeat(4, 1fr);
			grid-template-rows: repeat(2, 4fr);
			grid-auto-flow: dense;
		}
		.top div:nth-child(5) {
			grid-row: 1;
			grid-column: 3 / -1;
		}
		.top div:nth-child(6){
			display:block;
			grid-row:1;
			grid-column:1 / 3;
		}
	}
`;

const Layout = ({ children }) => {
	return (
		<StyledLayout>
			<div className="left">left</div>
			<div className="main">
				<div className="top">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div>dev@ncloud24.com</div>
					<div></div>
				</div>
				{children}
			</div>
		</StyledLayout>
	);
};

export default Layout;
