package com.stock.api.dtos.favorites;

import lombok.Data;

@Data
public class CreateFavoritesDto {
    private int MovieId;
    private int UserId;
}
