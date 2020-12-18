package tp.java.springboot_backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;
@Entity
@Table(name = "departements")

public class Departement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(length = 50)
    private String nomdept;
    @JsonIgnore
    @OneToMany(mappedBy = "departement")
    private List<Employe> employes;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNomdept() {
        return nomdept;
    }

    public void setNomdept(String nomdept) {
        this.nomdept = nomdept;
    }

    public List<Employe> getEmployes() {
        return employes;
    }

    public void setEmployes(List<Employe> employes) {
        this.employes = employes;
    }
}
