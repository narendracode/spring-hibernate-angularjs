package netgloo.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import netgloo.models.User;
import netgloo.models.UserDao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.http.server.ServletServerHttpResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
@RequestMapping(value="/user")
public class UserController {

  @Autowired
  private UserDao _userDao;
  
  @RequestMapping(value="/delete")
  @ResponseBody
  public String delete(long id) {
    try {
      User user = new User(id);
      _userDao.delete(user);
    }
    catch(Exception ex) {
      return ex.getMessage();
    }
    return "User succesfully deleted!";
  }
  

  @RequestMapping(value="/getall")
  @ResponseBody
  public ResponseEntity<List<User>> getAll() {
    String userId;
    List<User> users = new ArrayList<User>();
    try {
     users = _userDao.getAll();
     
     if(users.isEmpty()){
         return new ResponseEntity<List<User>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
     }
     
    }
    catch(Exception ex) {
     // return "User not found";
    }
    return new ResponseEntity<List<User>>(users, HttpStatus.OK);
  }

  @RequestMapping(value = "/save", method = RequestMethod.POST)
  public ResponseEntity<Object> test(@RequestBody User input){
	  User user = null;
	  
	  user = _userDao.getByEmail(input.getEmail());
	  System.out.println("user :"+user);
	  if(user!=null && user.getEmail()!=null && user.getEmail().equals(input.getEmail())){
		//  return new ResponseEntity<Object>(new String("{'error':'email id is already exisiting'"), HttpStatus.OK);
		  
		  Map<String,String> map = new HashMap<String,String>();
		  map.put("error","Email already used.");
		  
		  return new ResponseEntity<Object>(map, HttpStatus.OK);
	  }else{
		  user = new User( input.getEmail(), input.getfName(),  input.getlName(), input.getmCode(), input.getmNumber());
	      _userDao.save(user);
	      System.out.println("name:"+input.getfName()+" "+input.getlName());
	      return new ResponseEntity<Object>(user, HttpStatus.OK);
	  }

  }

  
} // class UserController
