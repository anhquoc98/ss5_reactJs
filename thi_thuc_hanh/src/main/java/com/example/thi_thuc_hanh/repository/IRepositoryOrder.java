package com.example.thi_thuc_hanh.repository;


import com.example.thi_thuc_hanh.model.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface IRepositoryOrder extends JpaRepository<Orders,Integer> {
    @Query(value = "select * from orders",nativeQuery = true)
    List<Orders> findAllBy();

    @Query(value = "delete from orders where id = :id",nativeQuery = true)
    void deleteOrders(int id);
}
