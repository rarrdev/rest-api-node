import { pool } from '../db.js'

//TRAER TODOS LOS EMPLEADOS
export const getEmployees = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT id,name,salary from employee')
        res.send(rows)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}


//TRAER EMPLEADOS POR id
export const getEmployeById = async (req, res) => {
    try {
        const id = req.params.id
        //const [result] = await pool.query(`SELECT id,name,salary from employee where id = ${id}`)    
        const [result] = await pool.query('SELECT id,name,salary from employee where id = ?', [id])

        if (result.length <= 0) {
            return res.status(404).json({
                message: 'Employee not found'
            })
        }
        res.json(result)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}


//CREAR EMPLEADO
export const createEmployees = async (req, res) => {
    try {
        //extraer los valores del json que lleva en el body
        const { name, salary } = req.body
        const [rows] = await pool.query('INSERT INTO employee(name,salary)values(?,?)', [name, salary])
        res.send({
            id: rows.insertId,
            name,
            salary
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}


//ACTUALIZAR EMPLEADO
export const updateEmployees = async (req, res) => {
    const { id, name, salary } = req.body
    const [rows] = await pool.query('UPDATE employee SET name = IFNULL(?,name),salary = IFNULL(?,salary) WHERE id = ?', [name, salary, id])

    if (rows.affectedRows <= 0) {
        return res.status(404).json({
            message: 'Employee not found'
        })
    }

    const [result] = await pool.query('SELECT id,name,salary from employee where id = ?', [id])
    if (result.length <= 0) {
        return res.status(404).json({
            message: 'Employee not found'
        })
    }
    res.json(result[0])
}


//ELIMINAR EMPLEADO
export const deleteEmployees = async (req, res) => {
    try {
        const id = req.params.id
        //const [result] = await pool.query(`SELECT id,name,salary from employee where id = ${id}`)    
        const [result] = await pool.query('DELETE FROM employee where id = ?', [id])
        if (result.affectedRows <= 0) {
            return res.status(404).json({
                message: 'Employee not found'
            })
        }
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

//CREAR EMPLEADO
export const consultarEmpleadoById = async (req, res) => {
    try {
        //extraer los valores del json que lleva en el body
        const { id } = req.body
        const [result] = await pool.query('select * from employee where id = ?', [id])

        if (result.length <= 0) {
            return res.status(404).json({
                message: 'Employee not found'
            })
        }
        res.json(result)

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}