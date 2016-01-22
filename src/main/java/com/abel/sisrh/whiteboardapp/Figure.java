/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.abel.sisrh.whiteboardapp;

import java.io.StringWriter;
import javax.json.Json;
import javax.json.JsonObject;

/**
 *
 * @author Administrador
 */
public class Figure {
    private JsonObject json;

    @Override
    public String toString(){
        StringWriter writer = new StringWriter();
        Json.createWriter(writer).write(json);
        return writer.toString();
    }
    
    public JsonObject getJson(){
        return json;
    }
    
    public Figure(JsonObject json) {
        this.json = json;
    }
    
}
