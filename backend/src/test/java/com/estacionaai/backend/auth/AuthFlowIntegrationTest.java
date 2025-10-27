package com.estacionaai.backend.auth;

import com.estacionaai.backend.auth.dto.RegisterRequest;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultMatcher;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.jsonPath;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class AuthFlowIntegrationTest {
    @Autowired
    MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;

//    @Test
    void register_login_and_access_protected_resource() throws Exception {
        RegisterRequest registerRequest = new RegisterRequest();

        registerRequest.setName("Test User");
        registerRequest.setUsername("test@email.com");
        registerRequest.setPassword("<PASSWORD>");

        MvcResult registerResult = mockMvc.perform(post("/api/auth/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(registerRequest)))
                .andExpect(status().isCreated())
                .andExpect((ResultMatcher) jsonPath("$.token").exists())
                .andReturn();

        String registerToken = objectMapper.readTree(registerResult.getResponse().getContentAsString()).get("token").asText();
        assertThat(registerToken).isNotBlank();

        String tokenFromRegister = objectMapper.readTree(registerResult.getResponse().getContentAsString()).get("token").asText();
        MvcResult meResult = mockMvc.perform(get("/api/users/me").header("Authorization", "Bearer " + tokenFromRegister)).andReturn();

        System.out.println("DEBUG: /api/users/me: " + meResult.getResponse().getStatus());
        System.out.println("DEBUG: /api/users/me: " + meResult.getResponse().getContentAsString());
        assertThat(meResult.getResponse().getStatus()).isEqualTo(200);
        assertThat(objectMapper.readTree(meResult.getResponse().getContentAsString()).get("name").asText()).isEqualTo("Test User");
        assertThat(objectMapper.readTree(meResult.getResponse().getContentAsString()).get("username").asText()).isEqualTo("test@email.com");


    }
}
