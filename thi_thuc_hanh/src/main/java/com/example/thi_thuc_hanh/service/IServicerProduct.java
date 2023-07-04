package com.example.thi_thuc_hanh.service;

import com.example.thi_thuc_hanh.model.Orders;
import com.example.thi_thuc_hanh.model.Product;
import org.springframework.stereotype.Service;

import java.util.List;


public interface IServicerProduct {


    List<Product> findByAll();
}
