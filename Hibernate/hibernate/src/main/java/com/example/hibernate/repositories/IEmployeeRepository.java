package com.example.hibernate.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.hibernate.entity.Employee;

@Repository
public interface IEmployeeRepository extends JpaRepository<Employee, Long>{

	
}
