#include <stdio.h>

int main()
{
    const float taxaA = 0.052;
    const float taxaB = 0.018;
    int A = 500;
    int B = 1500;
    int ano = 0;
    while (A < B)
    {
        A = A + (A * taxaA);
        B = B + (B * taxaB);
        ano++;
        /*     printf("A:%d\n", A);
            printf("B:%d\n", B); */
    };
    printf("Demorou %d anos a igualar as populaçôes \n", ano);
}
