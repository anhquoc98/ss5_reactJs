package com.example.thi_thuc_hanh.controller;

import com.example.thi_thuc_hanh.model.Product;
import com.example.thi_thuc_hanh.service.IServicerProduct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/api/product")
@CrossOrigin("*")
public class ProductController {
    @Autowired
    IServicerProduct iServicerProduct;

    @GetMapping("")
    public ResponseEntity<Iterable<Product>> findAllCustomer() {
        List<Product> products = iServicerProduct.findByAll();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }
}
