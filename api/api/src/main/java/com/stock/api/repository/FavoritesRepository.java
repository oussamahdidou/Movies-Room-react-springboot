package com.stock.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stock.api.models.Favorits;

public interface FavoritesRepository extends JpaRepository<Favorits, Integer> {

}
