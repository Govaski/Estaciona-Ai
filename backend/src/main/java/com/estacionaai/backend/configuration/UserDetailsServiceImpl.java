package com.estacionaai.backend.configuration;

import com.estacionaai.backend.auth.RoleName;
import com.estacionaai.backend.user.User;
import com.estacionaai.backend.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByEmail(username);
        if(user.isPresent()) {
            var userObj = user.get();
            return (UserDetails) User.builder()
                    .email(userObj.getEmail())
                    .password(userObj.getPassword())
                    .fullName(userObj.getFullName())
                    .role(getRoles(userObj))
                    .build();
        } else {
            throw new UsernameNotFoundException(username);
        }
    }

    private RoleName getRoles(User user) {
        if (user.getRole().toString() == null) {
            return RoleName.ROLE_MOTORISTA;
        }
        return user.getRole();
    }

}
