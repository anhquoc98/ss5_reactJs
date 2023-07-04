package com.example.thi_thuc_hanh.repository;

import com.example.thi_thuc_hanh.model.Orders;
import com.example.thi_thuc_hanh.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface IRepositoryProduct extends JpaRepository<Product,Integer> {
    @Query(value = "select * from product",nativeQuery = true)
    List<Product> findAllBy();
}
