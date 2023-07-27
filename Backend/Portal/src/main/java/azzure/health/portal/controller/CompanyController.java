package azzure.health.portal.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import azzure.health.portal.entity.Company;
import azzure.health.portal.service.CompanyService;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CompanyController {
    @Autowired
    private CompanyService companyService;

    @GetMapping("/user/company")
    public List<Company> getCompany() {
        return companyService.getCompany();
    }

    @PostMapping("/user/register/company")
    public String registerCompany(@RequestBody Company company) {
        return companyService.registerCompany(company);
    }

    @GetMapping("/user/company/{id}")
    public Optional<Company> getCompanyById(@PathVariable long id) {
        return companyService.getCompanyById(id);
    }

    @PutMapping("/user/company/{id}")
    public Company updateCompany(@PathVariable long id, @RequestBody Company company) {
        return companyService.updateCompany(id, company);
    }

    @DeleteMapping("/user/company/{id}")
    public String deleteCompany(@PathVariable long id) {
        return companyService.deleteCompany(id);
    }
    
}
