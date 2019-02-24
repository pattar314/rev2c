size = int(input("What is the circumference of the sphere at the equater in meteres: "))
c = 299792458;
rpm_needed = round((c / size), 3);
return(f"\n\nThe sphere would have to rotate at {rpm_needed}rpm for an object on its surface to reach lightspeed.")