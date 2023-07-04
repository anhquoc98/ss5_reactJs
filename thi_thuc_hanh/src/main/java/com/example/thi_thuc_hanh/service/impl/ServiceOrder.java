package com.example.thi_thuc_hanh.service.impl;


import com.example.thi_thuc_hanh.dto.OrdersDTO;
import com.example.thi_thuc_hanh.model.Orders;
import com.example.thi_thuc_hanh.repository.IRepositoryOrder;
import com.example.thi_thuc_hanh.service.IServiceOrder;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceOrder implements IServiceOrder {
    @Autowired
    IRepositoryOrder iRepositoryProduct;

    @Override
    public List<Orders> findByAll() {
        return iRepositoryProduct.findAllBy();
    }

    @Override
    public void save(OrdersDTO order) {
        Orders orders =new Orders();
        BeanUtils.copyProperties(order,orders);
        iRepositoryProduct.save(orders);
    }

    @Override
    public void update(OrdersDTO order) {
        Orders orders =new Orders();
        BeanUtils.copyProperties(order,orders);
        iRepositoryProduct.save(orders);
    }


    @Override
    public Orders getById(int id) {
        return null;
    }

    @Override
    public void delete(int id) {
        iRepositoryProduct.deleteOrders(id);
    }
}
