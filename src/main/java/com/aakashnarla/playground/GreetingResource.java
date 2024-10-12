package com.aakashnarla.playground;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

@Path("")
public class GreetingResource {

    @GET
    @Path("/hello")
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "Hello from Quarkus REST";
    }
    @GET
    @Path("/api/greeting")
    @Produces(MediaType.APPLICATION_JSON)
    public Greeting getGreeting() {
        return new Greeting("Hello from Quarkus!");
    }

    public static class Greeting {
        private String message;

        public Greeting() { }

        public Greeting(String message) {
            this.message = message;
        }

        public String getMessage() { return message; }

        public void setMessage(String message) { this.message = message; }
    }
}
