package com.stock.api.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Favorits {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int Id;
    private int MovieId;
    private int UsedId;

}
