import './app-info.css'

const AppInfo = (prop)=>{
	const {employeeCounts,increased} = prop;
	return (
		<div className="app-info">
			<h1>Учёт сотрудников в компании AVXM</h1>
			<h2>Общее число сотрудников: {employeeCounts}</h2>
			<h2	h2>Премию получат: {increased} </h2>
		</div>
	);
}

export default AppInfo;