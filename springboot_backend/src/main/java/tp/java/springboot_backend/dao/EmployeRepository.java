package tp.java.springboot_backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tp.java.springboot_backend.model.Employe;

@Repository
public interface EmployeRepository extends JpaRepository<Employe, Long> {
}
