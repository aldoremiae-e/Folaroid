package com.folaroid.portfolio.db.repository;

import com.folaroid.portfolio.db.entity.IntroPersonalData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IntroPersonalDataRepository extends JpaRepository<IntroPersonalData, Long> {

}