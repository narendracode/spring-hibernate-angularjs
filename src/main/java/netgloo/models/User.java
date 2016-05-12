package netgloo.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name="users")
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;
  
  @NotNull
  @Size(min = 3, max = 80)
  private String email;
  


  private String fName;
  private String lName;
  private String mCode;
  private String mNumber;
  
  
  public String getfName() {
	return fName;
}

public void setfName(String fName) {
	this.fName = fName;
}

public String getlName() {
	return lName;
}

public void setlName(String lName) {
	this.lName = lName;
}

public String getmCode() {
	return mCode;
}

public void setmCode(String mCode) {
	this.mCode = mCode;
}

public String getmNumber() {
	return mNumber;
}

public void setmNumber(String mNumber) {
	this.mNumber = mNumber;
}

public User() { }

  public User(long id) { 
    this.id = id;
  }



  public User(String email, String fName, String lName,
		String mCode, String mNumber) {
	super();
	this.email = email;
	this.fName = fName;
	this.lName = lName;
	this.mCode = mCode;
	this.mNumber = mNumber;
}

public long getId() {
    return id;
  }

  public void setId(long value) {
    this.id = value;
  }

  public String getEmail() {
    return email;
  }
  
  public void setEmail(String value) {
    this.email = value;
  }
  

  
} // class User
