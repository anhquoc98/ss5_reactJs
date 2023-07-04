package com.example.thi_thuc_hanh.service.impl;


import com.example.thi_thuc_hanh.model.Product;
import com.example.thi_thuc_hanh.repository.IRepositoryProduct;
import com.example.thi_thuc_hanh.service.IServicerProduct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceProduct implements IServicerProduct {
    @Autowired
    IRepositoryProduct iRepositoryProduct;

    @Override
    public List<Product> findByAll() {
        return iRepositoryProduct.findAllBy();
    }
}
