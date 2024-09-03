package com.stock.api.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.stock.api.dtos.favorites.CreateFavoritesDto;
import com.stock.api.models.Favorits;
import com.stock.api.services.favorites.IFavoritesService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@RequestMapping("/api/")
public class FavoritesController {
    private IFavoritesService favoritesService;

    public FavoritesController(IFavoritesService favoritesService) {
        this.favoritesService = favoritesService;
    }

    @PostMapping("test")
    public ResponseEntity<Favorits> getMethodName(@RequestBody CreateFavoritesDto createFavoritesDto) {
        favoritesService.CreateFavorites(createFavoritesDto);

        return ResponseEntity.ok(favoritesService.CreateFavorites(createFavoritesDto));
    }

}
