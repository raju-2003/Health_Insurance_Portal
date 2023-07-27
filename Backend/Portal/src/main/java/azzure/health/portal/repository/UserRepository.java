package azzure.health.portal.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import azzure.health.portal.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);


}
