FROM openjdk:11

# Set a clean working directory.
WORKDIR /app

# Download OTP 2.0.0.
ADD https://repo1.maven.org/maven2/org/opentripplanner/otp/2.0.0/otp-2.0.0-shaded.jar otp.jar

# Download SEPTA data from June 27, 2021.
ADD https://github.com/septadev/GTFS/releases/download/v202106271/gtfs_public.zip septa.zip

# This archive has two files: google_rail.zip and google_bus.zip.
RUN ["unzip", "septa.zip"]

# For OTP to recognize them, they must both be renamed so they have ".gtfs.zip" as their extension.
RUN ["mv", "google_rail.zip", "septa_rail.gtfs.zip"]
RUN ["mv", "google_bus.zip", "septa_bus.gtfs.zip"]

# Use OTP to preemptively build the graph from this SEPTA data.
RUN ["java", "-jar", "otp.jar", "--build", "--save", "."]

# Now that the graph is built, we can delete these files to make a smaller image.
RUN ["rm", "septa.zip", "septa_rail.gtfs.zip", "septa_bus.gtfs.zip"]

# Set our entrypoint to start OTP.
ENTRYPOINT ["java", "-jar", "otp.jar", "--load", ".", "--port", "80", "--securePort", "443"]