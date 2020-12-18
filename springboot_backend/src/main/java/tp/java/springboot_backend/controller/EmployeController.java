package tp.java.springboot_backend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tp.java.springboot_backend.dao.DepartementRepository;
import tp.java.springboot_backend.dao.EmployeRepository;
import tp.java.springboot_backend.exception.ResourceNotFoundException;
import tp.java.springboot_backend.model.Departement;
import tp.java.springboot_backend.model.Employe;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:4200")
@Controller
@RestController
@RequestMapping("/api/v1/")
public class EmployeController {

    @Autowired
    private EmployeRepository employeRepository ;

    @Autowired
    private DepartementRepository departementRepository;

    //Get all employe

    @GetMapping("/employes")
    public List<Employe> getAllEmployes(){
        return employeRepository.findAll();
    }

    //Get all employe

    @GetMapping("/departements")
    public List<Departement> getAllDepartements(){
        return departementRepository.findAll();
    }

    //create employee rest api
    @PostMapping("/employes")
    public Employe createEmploye(@RequestBody Employe employe){
        return employeRepository.save(employe);
    }
    //create departement rest api
    @PostMapping("/departements")
    public Departement createDepartement(@RequestBody Departement departement ){
        return departementRepository.save(departement);
    }
    //get employe by id rest api

    @GetMapping("/employes/{id}")
        public ResponseEntity<Employe> getEmployeById(@PathVariable Long id){
            Employe employe = employeRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("Employe not exist with id:"+id));
            return ResponseEntity.ok(employe);
        }

    //get departement by id rest api

    @GetMapping("/departements/{id}")
    public ResponseEntity<Departement> getDepartementById(@PathVariable Long id){
        Departement departement = departementRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Departement not exist with id:"+id));
        return ResponseEntity.ok(departement);
    }
//update employe rest api
    @PutMapping("/employes/{id}")
    public ResponseEntity<Employe> updateEmploye(@PathVariable  Long id, @RequestBody Employe employeDetails){
        Employe employe = employeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employe not exist with id:"+id));
        employe.setPrenom(employeDetails.getPrenom());
        employe.setNom(employeDetails.getNom());
        employe.setEmail(employeDetails.getEmail());
        employe.setTelephone(employeDetails.getTelephone());
        employe.setAdresse(employeDetails.getAdresse());
        employe.setDepartement(employeDetails.getDepartement());

        Employe updateEmploye = employeRepository.save(employe);
        return ResponseEntity.ok(updateEmploye);


    }

    //update departement rest api
    @PutMapping("/departements/{id}")
    public ResponseEntity<Departement> updateDepartement(@PathVariable  Long id, @RequestBody Departement departementDetails) {
        Departement departement = departementRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Departement not exist with id:" + id));
        departement.setNomdept(departementDetails.getNomdept());

        Departement updateDepartement = departementRepository.save(departement);
        return ResponseEntity.ok(updateDepartement);
    }
// delete employe rest api
    @DeleteMapping("/employes/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmploye(@PathVariable Long id){
        Employe employe = employeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employe not exist with id:"+id));
        employeRepository.delete(employe);

        Map<String, Boolean> response = new HashMap<>();
        response.put("delete",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    //delete departement rest api
    @DeleteMapping("/departements/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteDepartement(@PathVariable Long id){
        Departement departement = departementRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Departement not exist with id:" + id));
        departementRepository.delete(departement);

        Map<String, Boolean> response = new HashMap<>();
        response.put("delete",Boolean.TRUE);
        return ResponseEntity.ok(response);

    }

  /*  @GetMapping("/all")
    public String employePage(Model model) {
        Employe employe = new Employe();
        employe.setDepartement(new Departement());

        model.addAttribute("employe", employe);
        model.addAttribute("departements", departementRepository.findAll());
        model.addAttribute("employes", employeRepository.findAll());
        return "employe";
    }

    @PostMapping("/add")
    public String addemploye(@ModelAttribute("employe") Employe employe ) {
        return "redirect:/employe/all";


    }

    @GetMapping("/{id}")
    public @ResponseBody
    Employe OneEmploye(@PathVariable(name = "id") long employeId) {
        Optional<Employe> em = employeRepository.findById(employeId);
        return em.isPresent() ? em.get() : new Employe();
    }


    @PostMapping("/remove")
    public String addemploye(long employeId) {
        Employe em = employeRepository.getOne(employeId);
        employeRepository.delete(em);
        return "redirect:/employe/all";
    }

    @GetMapping("/edit/{id}")
    public String edit(@PathVariable("id") long id, Model model) {
        Employe em = employeRepository.getOne(id);
        model.addAttribute("medecin", em);
        return "editemploye";
    }

    @PostMapping("/update")
    public String addemploye(@ModelAttribute("medecin") Employe employe) {
        Employe em = employeRepository.getOne(employe.getId());
        em.setPrenom(employe.getPrenom());
        em.setNom(employe.getNom());
        em.setEmail(employe.getEmail());
        em.setTelephone(employe.getTelephone());
        em.setAdresse(employe.getAdresse());
        employeRepository.save(em);
        return "redirect:/employe/all";
    }
*/

}
