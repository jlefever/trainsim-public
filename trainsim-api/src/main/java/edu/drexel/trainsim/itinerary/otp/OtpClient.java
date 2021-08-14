package edu.drexel.trainsim.itinerary.otp;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeoutException;

import org.eclipse.jetty.client.HttpClient;

public class OtpClient {
    private String baseUrl;
    private HttpClient http;

    public OtpClient(String baseUrl) throws Exception {
        this.baseUrl = baseUrl;
        this.http = new HttpClient();
        this.http.start();
    }

    public String plan(Date date, String sourceStopId, String targetStopId) {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        String url = "plan?&mode=TRANSIT&time=12:00AM&searchWindow=86400" + "&fromPlace=" + sourceStopId + "&toPlace="
                + targetStopId + "&date=" + formatter.format(date) + "&showIntermediateStops=true";

        try {
            return this.http.GET(urlFor(url)).getContentAsString();
        } catch (InterruptedException | ExecutionException | TimeoutException e) {
            throw new RuntimeException(e);
        }
    }

    public String getAllStops() {
        try {
            return this.http.GET(urlFor("index/stops")).getContentAsString();
        } catch (InterruptedException | ExecutionException | TimeoutException e) {
            throw new RuntimeException(e);
        }
    }

    public String getAllRoutes() {
        try {
            return this.http.GET(urlFor("index/routes")).getContentAsString();
        } catch (InterruptedException | ExecutionException | TimeoutException e) {
            throw new RuntimeException(e);
        }
    }

    private String urlFor(String path) {
        return this.baseUrl + "/otp/routers/default/" + path;
    }
}
