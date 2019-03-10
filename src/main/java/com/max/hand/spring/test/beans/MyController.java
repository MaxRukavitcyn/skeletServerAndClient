package com.max.hand.spring.test.beans;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import smth.AnyClass;

@RestController
@CrossOrigin(origins = "http://localhost:8081")
@RequestMapping("/")
public class MyController {
    @RequestMapping(value = "/post", method = RequestMethod.POST)
    public AnyClass getMass() {

        return new AnyClass();
    }

    @RequestMapping(value = "/get", method = RequestMethod.GET)
    public String getMess() {

        return "Hello";
    }
}
