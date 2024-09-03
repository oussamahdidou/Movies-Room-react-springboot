package com.stock.api.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class WatchList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    private int MovieId;
    private int UsedId;
}
