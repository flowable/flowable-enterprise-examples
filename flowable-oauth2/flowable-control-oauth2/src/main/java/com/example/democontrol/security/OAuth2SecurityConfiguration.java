package com.example.democontrol.security;

import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import com.flowable.control.logic.constant.ControlPrivileges;

@Order(2)
@EnableWebSecurity
public class OAuth2SecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
				.authorizeRequests()
				.antMatchers("/**").hasAuthority(ControlPrivileges.ACCESS_CONTROL)
				.and()
				.oauth2Login()
				.userInfoEndpoint()
				.oidcUserService(new FlowableControlOAuth2UserService());
	}

}
