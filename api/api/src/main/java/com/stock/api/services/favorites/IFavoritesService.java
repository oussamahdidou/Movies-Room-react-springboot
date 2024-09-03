package com.stock.api.services.favorites;

import com.stock.api.dtos.favorites.CreateFavoritesDto;
import com.stock.api.models.Favorits;

public interface IFavoritesService {
    Favorits CreateFavorites(CreateFavoritesDto createFavoritesDto);
}
