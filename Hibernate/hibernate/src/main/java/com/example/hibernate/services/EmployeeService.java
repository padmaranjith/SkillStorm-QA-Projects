package com.example.hibernate.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.hibernate.entity.Employee;
import com.example.hibernate.repositories.IEmployeeRepository;


@Service
public class EmployeeService {

	@Autowired
	private IEmployeeRepository employeeRepository;
	
	public List<Employee> findAllEmployees(){
		return employeeRepository.findAll();
	}
	
	public Employee createEmployee(Employee e) {
		return employeeRepository.save(e);
	}
	
}
