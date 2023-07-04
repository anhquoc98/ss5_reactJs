package com.example.thi_thuc_hanh.dto;

import com.example.thi_thuc_hanh.model.Product;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class OrdersDTO {
    private int id;
    @NotBlank(message = "Không được để trống")
    private String codeOrder;
    @NotBlank(message = "Không được để trống")
    @Pattern(regexp = "^\\d{2}/\\d{2}/\\d{4}$",message = "Nhập đúng định dạng dd/mm/yyyy")
    private String date;
    @Min(value = 0,message = "lớn hơn 0")
    private int quantity;

    private int sum;

    private Product product;

    public OrdersDTO() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCodeOrder() {
        return codeOrder;
    }

    public void setCodeOrder(String codeOrder) {
        this.codeOrder = codeOrder;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getSum() {
        return sum;
    }

    public void setSum(int sum) {
        this.sum = sum;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
