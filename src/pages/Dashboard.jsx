import styled from "styled-components";
import { serverSource } from "../data/data";

const StyledDashboard = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	grid-gap: 10px;
	& > div {
		margin: 2rem;
	}
	& > div:nth-child(2) {
		grid-column: 2/3;
		grid-row: 1/3;
	}
	& > div:nth-child(5) {
		grid-column: 3/4;
		grid-row: 2/4;
	}

	& > div > div {
		width: 100%;
		height: calc(100% - 4rem);
		background-color: #fff;
		border: 0;
		border-radius: 30px;
		box-shadow: 2px 2px 11px 2px rgba(0, 0, 0, 0.1);
		min-height: 20rem;
	}
	& > div:nth-child(4) > div {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 2rem;
		box-shadow: none;
		justify-items: center;
		align-items: center;
	}
	& > div > p {
		height: 4rem;
		font-size: 2.1rem;
		font-weight: bold;
	}
	.server-source {
		border-radius: 30px;
		width: 100%;
		height: 100%;
		border: 0;
		box-shadow: 2px 2px 11px 2px rgba(0, 0, 0, 0.1);
		display: flex;
		justify-content: center;
		align-items: center;
		> div{
			width:100%;
			text-align:center;
			margin:0 1rem;
			> img{
				width:100%;
				max-width:45px;
			}
		}
		& p{
			text-align:center;
		}
	}

	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(9, 1fr);
		& > div:nth-child(1) {
			order: 2;
		}
		& > div:nth-child(2) {
			grid-column: 1/2;
			grid-row: 1/3;
		}
		& > div:nth-child(3) {
			order: 1;
		}
		& > div:nth-child(4) {
			order: 3;
		}
		& > div:nth-child(5) {
			grid-column: 1/2;
			grid-row: 6/8;
		}
	}
`;

const Dashboard = () => {
	return (
		<StyledDashboard>
			<div>
				<p>전체자원</p>
				<div></div>
			</div>
			<div>
				<p>트래픽</p>
				<div></div>
			</div>
			<div>
				<p>이번달 총 요금</p>
				<div></div>
			</div>
			<div>
				<p>서버 자원</p>
				<div>
					{serverSource.map((item) => (
						<div className="server-source" key={item.id}>
							<div>
								<img src={item.image} alt={item.name} />
							</div>
							<div>
								<p>{item.name}</p>
								<p>{item.num}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div>
				<p>3개월간 월별 요금</p>
				<div></div>
			</div>
			<div>
				<p>새소식</p>
				<div></div>
			</div>
			<div>
				<p>1:1 문의 내역</p>
				<div></div>
			</div>
		</StyledDashboard>
	);
};

export default Dashboard;
