package com.example.thi_thuc_hanh.service;


import com.example.thi_thuc_hanh.dto.OrdersDTO;
import com.example.thi_thuc_hanh.model.Orders;

import java.util.List;

public interface IServiceOrder {
    List<Orders> findByAll();

    void save(OrdersDTO order);
    void update(OrdersDTO order);
    Orders getById(int id);
    void delete(int id);

}
