package com.example.thi_thuc_hanh.controller;


import com.example.thi_thuc_hanh.dto.OrdersDTO;
import com.example.thi_thuc_hanh.model.Orders;
import com.example.thi_thuc_hanh.service.IServiceOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/api/orders")
@CrossOrigin("*")
public class OrderController {
    @Autowired
    IServiceOrder iServiceOrder;

    @GetMapping("")
    public ResponseEntity<Iterable<Orders>> findAllCustomer() {
        List<Orders> orders = iServiceOrder.findByAll();

        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @DeleteMapping("")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@RequestParam(required = false)Integer id){
        iServiceOrder.delete(id);
    }

    @PostMapping("")
    public ResponseEntity<?> create(@Validated @RequestBody OrdersDTO ordersDTO, BindingResult bindingResult){
        if(!bindingResult.hasErrors()){

            iServiceOrder.save(ordersDTO);
        } else {
            Map<String, String> map = new LinkedHashMap<>();
            List<FieldError> err = bindingResult.getFieldErrors();
            for (FieldError error : err){
                if(!map.containsKey(error.getField())){
                    map.put(error.getField(),error.getDefaultMessage());
                }
            }
            return new ResponseEntity<>(map,HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("")
    public ResponseEntity<?> update(@Validated @RequestBody OrdersDTO ordersDTO, BindingResult bindingResult){
        if(!bindingResult.hasErrors()){
            iServiceOrder.update(ordersDTO);
        } else {
            Map<String, String> map = new LinkedHashMap<>();
            List<FieldError> err = bindingResult.getFieldErrors();
            for (FieldError error : err){
                if(!map.containsKey(error.getField())){
                    map.put(error.getField(),error.getDefaultMessage());
                }
            }
            return new ResponseEntity<>(map,HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
