package com.stock.api.services.favorites;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stock.api.dtos.favorites.CreateFavoritesDto;
import com.stock.api.models.Favorits;
import com.stock.api.repository.FavoritesRepository;

@Service
public class FavoritesService implements IFavoritesService {
    @Autowired
    private FavoritesRepository favoritesRepository;

    public FavoritesService(FavoritesRepository favoritesRepository) {
        this.favoritesRepository = favoritesRepository;
    }

    @Override
    public Favorits CreateFavorites(CreateFavoritesDto createFavoritesDto) {
        Favorits favorits = new Favorits();
        favorits.setMovieId(createFavoritesDto.getMovieId());
        favorits.setUsedId(createFavoritesDto.getUserId());
        Favorits newFavorits = favoritesRepository.save(favorits);
        return newFavorits;
    }

}
