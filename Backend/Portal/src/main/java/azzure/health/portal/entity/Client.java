package azzure.health.portal.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "client")
public class Client {
    @Id
    private long clientprofileid;
    private String email;
    private String firstname;
    private String lastname;
    private String gender;
    private String dob;
    private String maritalstatus;
    private String occupation;
    private long income;
    private String doorno;
    private String street;
    private String area;
    private String city;
    private String district;
    private String state;
    private long pincode;
    private long phonenumber;
    private long emergencyphonenumber;
    private String emergencyemail;
    private float height;
    private float weight;
    private String bloodgroup;
    private String existingillness;

   
    
}
