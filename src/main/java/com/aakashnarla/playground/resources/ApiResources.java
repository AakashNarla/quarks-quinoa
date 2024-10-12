package com.aakashnarla.playground.resources;

import com.aakashnarla.playground.dto.ProjectsDto;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.Response;

import java.util.List;

@Path("/api")
public class ApiResources
{

    @GET
    @Path("/projects")
    @Produces("application/json")
    public Response getProjects()
    {
        ProjectsDto projectsDto = new ProjectsDto();
        projectsDto.setProjects(List.of("Project 1", "Project 12", "Project 3"));
        return Response.ok(projectsDto).build();
    }
}
