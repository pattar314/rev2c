import sys



def main():
    if len(sys.argv) > 1:
        if sys.argv[1].isdigit():
            size = int(sys.argv[1])
    else:
        size = int(input("What is the circumference of the sphere at the equater in meteres: "))
        
    c = 299792458
    rpm_needed = round((c / size) * 60, 3)
    print(f"\n\nThe sphere would have to rotate at {rpm_needed} rpm for an object on its surface to reach lightspeed.")

main()