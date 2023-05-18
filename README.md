# Employee Management Application
* Front-end: ReactJS
* Back-end: NodeJs, Express, RESTful APIs (JSON Object), MongoDB.
## Screen List
* Login
  ![](https://github.com/kellyhoang1291/ReactJS_Employee_Management_FE/blob/master/frontend/screenshot/login.PNG)
* Employee List
  ![](https://github.com/kellyhoang1291/ReactJS_Employee_Management_FE/blob/master/frontend/screenshot/employees_list.PNG)
* View Employee
![](https://github.com/kellyhoang1291/ReactJS_Employee_Management_FE/blob/master/frontend/screenshot/view_employee.PNG)
* Add Employee
![](https://github.com/kellyhoang1291/ReactJS_Employee_Management_FE/blob/master/frontend/screenshot/add.PNG)
* Delete Employee
![](https://github.com/kellyhoang1291/ReactJS_Employee_Management_FE/blob/master/frontend/screenshot/delete_employee.PNG)

# API List
|#|Method|EndPoint|Response Code|Description|
|-|-|-|-|-|
|1| POST| /api/user/signup |201|Allow user to create new account|
|2| POST|/api/user/login| 200|Allow user to access the system|
|3| GET |/api/emp/employees| 200|User can get all employee list|
|4 |POST| /api/emp/employees| 201|User can create new employee|
|5 |GET| /api/emp/employees/{eid}| 200| User can get employee details by employee id|
|6| PUT |/api/emp/employees/{eid} |200 |User can update employee details|
|7| DELETE |/api/emp/employees?eid=xxx| 204| User can delete employee by employee id|
