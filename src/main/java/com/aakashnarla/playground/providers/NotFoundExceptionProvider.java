package com.aakashnarla.playground.providers;

import io.quarkus.logging.Log;
import jakarta.ws.rs.NotFoundException;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.ExceptionMapper;

import java.io.InputStream;


public class NotFoundExceptionProvider implements ExceptionMapper<NotFoundException>
{
    @Override
    public Response toResponse(NotFoundException exception)
    {

        try (InputStream errorPage = getClass().getClassLoader().getResourceAsStream("META-INF/resources/404.html"))
        {
            if (errorPage == null) {
                Log.error("404.html not found");
                return Response.status(Response.Status.NOT_FOUND).entity("404 Not Found").build();
            }
            String errorPageString = new String(errorPage.readAllBytes());
            return Response.status(Response.Status.NOT_FOUND)
                    .type("text/html")
                    .entity(errorPageString).build();

        }
        catch (Exception e) {
            e.printStackTrace();
            return Response.status(Response.Status.NOT_FOUND).entity("404 Not Found").build();
        }
    }
}
