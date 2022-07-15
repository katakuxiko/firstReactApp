import './employees-add-form.css'

const EmployeesAddForm = ()=>{
	return(
		<div className="app-add-form">
			<h3>Добавьте нового сотрудника</h3>
			<form action="" className="add-form d-flex">
				<input type="text" className="form-control new-post-label" placeholder="Name"/>
				<input type="text" className="form-control new-post-label" placeholder="Salary $"/>
				<button className="btn btn-outline-light">Добавить</button>
			</form>
		</div>
	)
}

export default EmployeesAddForm