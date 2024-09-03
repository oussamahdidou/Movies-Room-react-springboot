package com.stock.api.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api/")

public class FavoritesController {
    @GetMapping("test")
    public ResponseEntity<List<String>> getMethodName(@RequestParam String param) {
        List<String> items = new ArrayList<String>();
        for (int i = 0; i < 10; i++) {
            items.add("paragraphe " + i);
        }

        return ResponseEntity.ok(items);
    }

}
